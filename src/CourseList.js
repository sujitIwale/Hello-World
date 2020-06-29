import React from 'react';
import Front from './front';
const CourseList = ({list})  => {
    return (
        <div>
           { list.map((user ,i)=> {
           return  <Front key={i}
           course={list[i].course}
           status={list[i].status}
           website={list[i].website} />
           }
           )}
           </div>


    );
}

export default CourseList;