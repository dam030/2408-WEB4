import React from 'react'
// 컴포넌트 만들기

export default function Post (props) {
    return (
        <div className='post' style={
            {
                border: '1px solid black',
                borderRadius: '100px',
                marginBottom: '24px'
            }
        }>
            <h3>{props.제목}</h3>
            <p>{props.내용}</p>
        </div>
    )
}