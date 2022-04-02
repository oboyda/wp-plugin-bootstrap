import React, { Component } from 'react';
import Utils from '../Utils';
import View from './View';
import TilesBar from './TilesBar';
// import ToolsBar from './ToolsBar';
import Grid from './Grid';
import Modal from './Modal';

class App extends View {

    constructor(props)
    {
        super(props);

        // this.state = {
        // };
    }

    modalOpen(headerTitle, bodyContent)
    {
        Utils.dispatchEvent('modal__set_state', {
            opened: true,
            headerTitle: headerTitle,
            bodyContent: bodyContent
        });
    }
    modalClose()
    {
        Utils.dispatchEvent('modal__set_state', {
            opened: false,
            headerTitle: '',
            bodyContent: ''
        });
    }

    tileOptionsEnable(gridX, gridY)
    {
        Utils.dispatchEvent('tileoptions__set_state', {
            enabled: true,
            gridX: gridX,
            gridY: gridY
        });
    }
    tileOptionsDisable()
    {
        Utils.dispatchEvent('tileoptions__set_state', {
            enabled: false
        });
    }

    gridPlaceTile(tileType, gridX, gridY)
    {
        Utils.dispatchEvent('grid__place_tile', {
            tileConfig: {
                type: tileType,
                rotation: 0
            },
            gridX: gridX,
            gridY: gridY
        });
        this.modalClose();
    }
    
    render() {
        return (
            <div className="tilec-app">
                <div className='app-editor'>
                    <TilesBar app={this} />
                    <Grid app={this} gridSizeX={25} gridSizeY={25} />
                    {/* <ToolsBar app={this} /> */}
                </div>
                {/* <FeaturesBar app={this} /> */}
                <Modal app={this} />
            </div>
        );
    }
}

export default App;