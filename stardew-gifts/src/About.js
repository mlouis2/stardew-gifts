import { useState } from 'react';

function About() {
    const [expanded, setExpanded] = useState(false);

    function expandOrCollapse() {
        setExpanded(!expanded);
    }

    return (
        <div className="About">
            <div onClick={expandOrCollapse} className="AboutTitle">
                About &amp; Credits
            </div>
            {expanded ?
                <div className="AboutInfo">
                    App created by Maddie.
                    <br/>
                    Have feedback? Leave it <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/QK7Vv8QyuoXDVFp2A">here!</a>
                    <br/>
                    <br/>
                    Credits:
                    <br />
                    <a target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/r/StardewValley/comments/ase617/item_textbox_templates_for_you_symbols_font/">Item Textbox Header</a>
                    <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://stardewvalleywiki.com/Stardew_Valley_Wiki">Gift Data and Character Portraits</a>
                    <br/>
                    Stardew Valley created by <a target="_blank" rel="noopener noreferrer" href="https://stardewvalleywiki.com/ConcernedApe">ConcernedApe</a>.
                </div>
            : null}
        </div>
    );
}

export default About;