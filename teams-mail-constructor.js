var ReactDOM = require('react-dom');
var React = require('react');
import OrganisedChaos from './OrganisedChaosForEmail';
import ReactDOMServer from 'react-dom/server';

function getTeamsMailBody(teams_list){
    teams_list = teams_list || [];
    var email_html_body = ReactDOMServer.renderToString(<OrganisedChaos teams_list={teams_list} />);
    return email_html_body;
}

module.exports = getTeamsMailBody;