import React, { Component } from 'react';
const tableStyle = {
    'border': '1px solid black',
    'border-collapse': 'collapse',
    'padding': '5px',
    'text-align': 'left'
}

class OrganisedChaos extends Component {
    render() {
        return (
            <html>
                <body>
                    <table style={tableStyle}>
                        <caption>Teams List </caption>
                        <tr style={tableStyle}>
                            <th style={tableStyle}>
                                Task.
                            </th>
                            <th style={tableStyle}>
                                Members.
                            </th>
                        </tr>
                        {this.props.teams_list.map(function (team) {
                            return (<tr style={tableStyle}>
                                <td style={tableStyle} >
                                    {team.team_name}
                                </td>
                                <td style={tableStyle}>
                                    {team.team_members.map((team)=>{
                                        return(team.Name);
                                    }).toString()} 
                                </td>
                            </tr>)
                        })}
                    </table>
                </body>
            </html>

        )
    }
}

export default OrganisedChaos;