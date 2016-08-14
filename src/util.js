'use strict';
/**
 * Created by kanziw on 2016. 8. 14..
 */

import fs from 'fs';
import path from 'path';
import {spawn} from 'child_process';
import colors from 'colors/safe';

export function runShellCommandAndPrintResult(name, commands) {
  const processName = `[${name}]`;
  const process = spawn(commands[0], commands.splice(1));
  process.stdout.on('data', (data) => {
    data = data.toString().trim().replace(/^/g, '   ').replace(/\n/g, '\n   ');
    if (data.trim()) {
      console.log(`${processName}\n${data}`);
    }
  });
  process.stderr.on('data', (data) => {
    data = colors.red.underline(data.toString().trim()).replace(/^/g, '   ').replace(/\n/g, '\n   ');
    if (data.trim()) {
      console.error(`${processName}\n${data}`)
    }
  });
}

/**
 * package.json 파일이 존재하는 루트 디렉토리를 찾는다.
 */
export function findServerRoot() {
  let depth = 0;
  let found = false;
  do {
    depth++;
    found = fs.existsSync(path.join(__dirname, '../'.repeat(depth) + 'package.json'));
  } while (depth < 5 && !found);
  assert(found, `Failed to detect root dir.`);
  return path.join(__dirname, '../'.repeat(depth));
}

/**
 * inspection warning 을 감추기 위한 typedef
 * @typedef {object} colors
 * @property red {object}
 */
