import json, base64, sys

if __name__ == "__main__" and len(sys.argv) == 7:
  id = sys.argv[1];
  name = sys.argv[2];
  author = sys.argv[3];
  version = sys.argv[4];
  url = sys.argv[5];
  code = sys.argv[6];
  with open(id + ".json", "w") as w:
    with open(code, "rb") as c:
      w.write(json.dumps({
        "id": id,
        "name": name,
        "author": author,
        "version": version,
        "url": url,
        "code": base64.b64encode(c.read()).decode()
      }, ensure_ascii=False));
elif __name__ == "__main__":
  print("python tojson.py <name> <id> <author> <version> <url> <code>");
