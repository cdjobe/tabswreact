import React from 'react';

const Tab = ( props ) => {
    // console.log(props);
    const {activeTab, setActiveTab} = props;
    console.log(activeTab.activeContent);
    console.log();

    const onClickHandler = (e) => {
        setActiveTab({...activeTab,
            activeTab: props.label,
            activeContent: props.content
        })
    }

    return (
        <div onClick={onClickHandler} className={props.activeTab.activeTab == props.label ? 'tab tab-active' : 'tab'}>{props.label}</div>
    )
}

export default Tab;