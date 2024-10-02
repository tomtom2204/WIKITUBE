'use strict'

function getPromiseFor(value, time = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value !== undefined) resolve(value)
        }, time)
    })
}

function getArrayOf(...values) {
    return values
}


function saveToStorage(key, val) {
	localStorage.setItem(key, JSON.stringify(val))
}


function loadFromStorage(key) {
	var val = localStorage.getItem(key)
	return JSON.parse(val)
}


function getRandomIntInclusive(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min // The maximum is inclusive and the minimum is inclusive
}


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// `wait` milliseconds.


function debounce(func, wait = 300) {
	let timeout


	return function executedFunction(...args) {
		const later = () => {
			// clearTimeout(timeout)
			func(...args)
		}
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
	}
}

