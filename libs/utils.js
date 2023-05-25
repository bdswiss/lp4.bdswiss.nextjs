// import fsPromises from 'fs/promises';
// import path from 'path'

import { isEmpty, isNil } from "lodash";
import Link from "next/link";

// const dataDirectory = path.join(process.cwd(), 'data');

export function getJsonData(fileName) {
  // const fullPath = path.join(dataDirectory, fileName);
  // const fileContents = fs.readFileSync(fullPath, 'utf8');
  // const jsonData = JSON.parse(fileContents);
  // console.log(jsonData);

  // const filePath = path.join(process.cwd(), 'data.json');
  // const jsonData = fsPromises.readFile(filePath);
  // const objectData = JSON.parse(jsonData);

  return {};
  // return {
  //   jsonData
  // };
}

export function generate_element(tag, data, elementClass = "") {
  switch (tag) {
    case "image":

    break
    case "a":
      let urlpath = !isNil(data.path) ? data.path : "";
      let href = `${data.href} ${urlpath}`;
      // href = cta_link($data->href, $path);

      let targetValue = !isNil(data.target) ? data.target : ""
      let textValue = data.text
      let classValue = !isEmpty(elementClass) ? elementClass : ""

      return (
        <Link href={`${href}`} target={targetValue} className={classValue}>
          {textValue}
        </Link>
      );
    default:
      break
  }
}

export function generate_menu(classes, links) {
  return (
    <ul className={`${classes}`}>
      {links.map((link, index) => {
        return (
          <li
            className={`nav-item ${
              !isNil(link.type) && link.type === "button" ? " button-item" : ""
            } ${index === links.length - 1 ? " last-list-item" : ""}`}
            key={index}
          >
            {link.type === "button" ? (
              <div className="buttons">
                <div className="button-wrapper">
                  {generate_element("a", link, "btn primary")}
                </div>
              </div>
            ) : (
              <>{generate_element("a", link, "nav-link")}</>
            )}
          </li>
        );
      })}
    </ul>
  );
}
