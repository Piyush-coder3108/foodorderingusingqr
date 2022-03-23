import React from "react";

const MenuCard = ({}) => {
    return (
        <div className="menu_card">
            <div className="item_detail">
                <div className="item_name">ABC</div>
                <div className="item_des">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse magna dui, mattis at purus sit amet, blandit
                    efficitur turpis. Donec in risus nisl. Aenean sed erat
                    lorem. Sed feugiat neque quam, eget euismod massa viverra
                    vel. Suspendisse malesuada vel ipsum id finibus. Vivamus
                    aliquet ornare massa in congue. Nam tempus.
                </div>
                <div className="item_price">$100</div>
            </div>
            <div className="item_photo">
                <img src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg" />
            </div>
        </div>
    );
};

export default MenuCard;
