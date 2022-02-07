import React from 'react';

function RelativeDate(props) {
  const date = new Date(props.date)
  const dateMs = date.getTime()
  const nowMs = Date.now()
  const distance = nowMs - dateMs;
  
  let timeString = '';

  if (distance > 30 * 24 * 60 * 60 * 1000) {
    timeString = date.getDate() + ' ' + date.toLocaleString('en-us', { month: 'short' })
    
    if (date.getFullYear() !== new Date().getFullYear()) {
      timeString += ', ' + date.getFullYear()
    }
  } else if (distance > 48 * 60 * 60 * 1000) {
    timeString = Math.floor(distance / (24 * 60 * 60 * 1000)) + ' days ago'
  } else if (distance > 24 * 60 * 60 * 1000) {
    timeString = 'yesterday'
  } else if (distance > 60 * 60 * 1000) {
    timeString = Math.floor(distance / (60 * 60 * 1000)) + ' hours ago'
  } else if (distance > 60 * 1000) {
    timeString = Math.floor(distance / (60 * 1000)) + ' minutes ago'
  } else if (distance > 1000) {
    timeString = Math.floor(distance / 1000) + ' seconds ago'
  } else {
    timeString = 'just now'
  }

  return <span>{timeString}</span>;
}

export default RelativeDate;