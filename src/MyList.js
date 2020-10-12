import React from "react";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Item from "./Item";

const firestore = firebase.firestore();

const MyList = () => {
    const [presents] = useCollectionData({ idField: 'id' });
    return (
        <div>
            {(presents.map((presents) => {
                return (
                    <Item />
                );
            })
            )}
        </div>
    );
};

export default MyList;