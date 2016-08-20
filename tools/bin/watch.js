'use strict';
/**
 * Created by kanziw on 2016. 8. 13..
 */

import {runShellCommandAndPrintResult} from '../../util';

// package.json 에 등록된 명령들
runShellCommandAndPrintResult('Watching Babel', ['npm', 'run', 'watch_babel']);
runShellCommandAndPrintResult('Watching Bundle', ['npm', 'run', 'watch_bundle']);
runShellCommandAndPrintResult('Running Server', ['npm', 'run', 'server_only']);

// for graceful shutdown
// 종료 시그널들이 들어오면 process 를 kill 하는 callback 을 등록
['SIGUSR2', 'SIGINT'].forEach(SIGNAL => process.once(SIGNAL, () => {
  console.log('\nGracefully shutdown success.');
  process.kill(process.pid, SIGNAL)
}));
