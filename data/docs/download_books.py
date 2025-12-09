import os
import re
import requests
import subprocess
from bs4 import BeautifulSoup
from urllib.parse import urljoin

BASE_URL = "https://pctb.punjab.gov.pk/E-Books"
OUTPUT_DIR = "books"

os.makedirs(OUTPUT_DIR, exist_ok=True)

session = requests.Session()
session.verify = False
requests.packages.urllib3.disable_warnings()


def curl_download(url, filename):
    filepath = os.path.join(OUTPUT_DIR, filename)

    print(f"Downloading: {filename}")
    try:
        subprocess.run(
            ["curl", "-L", "-o", filepath, url],
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
        )
        print(f"✔ Saved: {filepath}")
    except subprocess.CalledProcessError as e:
        print(f"❌ curl failed: {e}")


def convert_drive_to_direct(drive_url):
    match = re.search(r"/d/(.*?)/", drive_url)
    if not match:
        return None
    file_id = match.group(1)
    return f"https://drive.google.com/uc?export=download&id={file_id}"


def scrape_page():
    print("Fetching page…")

    resp = session.get(BASE_URL)
    soup = BeautifulSoup(resp.text, "html.parser")

    links = soup.find_all("a", href=True)
    google_files = []

    for a in links:
        text = a.get_text(strip=True)
        href = a["href"]
        full = urljoin(BASE_URL, href)

        if "drive.google.com" in full:
            filename = f"{text}.pdf".replace("/", "_")
            google_files.append((full, filename))

    print(f"Found {len(google_files)} files.")

    for url, filename in google_files:
        direct = convert_drive_to_direct(url)
        if not direct:
            print("⚠ Invalid drive link:", url)
            continue
        curl_download(direct, filename)


if __name__ == "__main__":
    scrape_page()
