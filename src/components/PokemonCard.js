import React from "react";
import { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({card}) {

const [turnSprite, setTurnSprite] = useState(true)


  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={() => {setTurnSprite(!turnSprite)}} src={turnSprite ? card.sprites.front : card.sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{card.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {card.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
