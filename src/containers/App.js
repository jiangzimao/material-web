import React from 'react'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import CheckIn from './CheckIn'

class App extends React.Component {
    render (){
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <CheckIn />
            </MuiThemeProvider>
        )
    }
}

export default App