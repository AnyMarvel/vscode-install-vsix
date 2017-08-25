
/* IMPORT */

import * as vscode from 'vscode';
import Utils from './utils';

/* COMMANDS */

async function install ( file: vscode.Uri ) {

  if ( !file || !file.path ) return;

  /* TERMINAL */

  const term = vscode.window.createTerminal ( 'VSIX' );

  await term.processId;
  await Utils.delay ( 200 );

  term.sendText ( `code --install-extension ${file.path}`, true );

  term.show ( false );

  /* INFO */

  const option = await vscode.window.showInformationMessage ( 'Installing extension... Once done, a restart is needed.', { title: 'Reload Now' } );

  if ( !option || option.title !== 'Reload Now' ) return;

  vscode.commands.executeCommand ( 'workbench.action.reloadWindow' );

}

/* EXPORT */

export {install};