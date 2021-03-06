
/* IMPORT */

import * as vscode from 'vscode';
import * as Commands from './commands';

/* MESSAGES */

const Messages = {

  installing () {

    vscode.window.showInformationMessage ( 'Installing extension...' );

  },

  async success () {

    const option = await vscode.window.showInformationMessage ( 'Extension intalled, a reload is needed.', { title: 'Reload' } );

    if ( !option || option.title !== 'Reload' ) return;

    vscode.commands.executeCommand ( 'workbench.action.reloadWindow' );

  },

  error () {

    vscode.window.showWarningMessage ( 'The extension was not installed correctly. Please check the terminal for more informations.' );

  },

  async force ( file: vscode.Uri ) {

    const option = await vscode.window.showWarningMessage ( 'A newer version is already installed, would you like to force the installation?', { title: 'Yes' }, { title: 'No' } );

    if ( !option || option.title !== 'Yes' ) return;

    Commands.install ( file, true );

  }

};

/* EXPORT */

export default Messages;
