import View from './View';
import TileOptions from './TileOptions';

class ToolsBar extends View 
{
    constructor(props)
    {
        super(props, {
            app: null
        });

        // this.state = {
        // };
    }

    render()
    {
        return (
            <div className='view tiles-bar'>
                <TileOptions app={this.app} />
            </div>
        );
    }
}

export default ToolsBar;