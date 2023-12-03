let now = ''
let prev = ''
let sign = ''
let display = $('header p')

$('.btn').click(e => {
	const key = e.target.textContent
	// ←

	if (key >= '0' && key <= '9') {
		if (prev === '' && sign === '') {
			now += key
			display.text(now)
		} else if (now !== '' && prev !== '') {
			prev = key
			display.text(now)
		} else {
			prev += key
			display.text(prev)
		}
		console.log(now, prev, sign)
		return
	}
})

$('.signs').click(e => {
	const key = e.target.textContent
	switch (key) {
		case '←':
			break
		case '+':
		case '-':
		case '×':
		case '÷':
			sign = key
			display.text(sign)
			break
	}
})

$('.signs:contains(C)').click(() => {
	now = ''
	prev = ''
	sign = ''
	display.text(0)
})

$('.signs:contains(=)').click(e => {
	const key = e.target.textContent

	switch (sign) {
		case '+':
			now = +now + +prev
			break
		case '-':
			now = now - prev
			break
		case '×':
			now = now * prev
			break
		case '÷':
			if (prev === '0') {
				display.text('error')
				now = ''
				prev = ''
				sign = ''
			}
			now = now / prev
			now = now.toFixed(1)
			break
	}
	display.text(now)
})
