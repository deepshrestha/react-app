import React from 'react';

$(document).ready(function(){
    $('[data-toggle="popover_settings"]').popover({
        html : true, 
        content: function() {
            return $('#popover_content_wrapper_settings').html();
        }
    });
});

function Settings(){
    return (
        <div>
            <a className="nav-link" href="#" data-toggle="popover_settings" title="Settings" data-placement="bottom" data-content="">
                <img title="Notification" src="/src/images/settings.png" height="25" width="30" />
            </a>
            <div id="popover_content_wrapper_settings" style={{display: "none"}}>
                <div>This is your div content!</div>
                <hr />
                <div>This is your div content!</div>
                <hr />
                <div>This is your div content!</div>
            </div>
        </div>
    )
}

export default Settings;