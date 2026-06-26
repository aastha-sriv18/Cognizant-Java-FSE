import React from "react";

function CourseDetails(props) {

    const coursedet = props.courses.map(course => (

        <div key={course.id}>
            <h3>{course.cname}</h3>
            <h4>{course.date}</h4>
        </div>

    ));

    return (

        <div>
            <h1>Course Details</h1>
            {coursedet}
        </div>

    );
}

export default CourseDetails;