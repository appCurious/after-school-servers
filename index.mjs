import html from 'snabby';

const homePage = html`<div>
    <h1>After School Server</h1>
    <div>
        Api Routes List
        <div id="api-routes-list"></div>
    </div>
    
</div>`;
function init () {
    return homePage
}

export default {init};