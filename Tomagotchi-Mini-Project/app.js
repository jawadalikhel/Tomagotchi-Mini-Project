// $('.enterName').on('click', () =>{
// 	const $input = $('input').val();
// 	console.log($input);
// 	displayName($input);

// });

// const displayName = (nameVal) =>{
// 	$('contain').append('<h2>' + nameVal + '</h2>');
// }



// $('.startBtn').on('click', () =>{

// 	let time = 10;
// 	$('startBtn').text(time);

// 	const setTimer = () =>{


// 		let timer = setInterval(() => {
// 			$('.startBtn').text(time-1);
// 			time--;
// 			console.log(time);


// 			if($('.Hunger').val() === 0 && time == 0){
// 				clearInterval(timer);
// 				$('.startBtn').text('Die of Hunger');
// 			}

// 			if($('.Sleepines').val() === 0 && time == 0){
// 				clearInterval(timer);
// 				$('.startBtn').text('Die of Sleepiness');
// 			}

// 			if($('.Boredom').val() === 0 && time == 0){
// 				clearInterval(timer);
// 				$('.startBtn').text('Die of Boredom');
// 			}

// 			let $hungerVal = $('.Hunger').val();
// 			$hungerVal--;
// 			$('.Hunger').val($hungerVal);

// 			let $boredomVal = $('.Boredom').val();
// 			$boredomVal--;
// 			$('.Boredom').val($boredomVal);

// 			let ageVal = $('.age').val();
// 			ageVal++;
// 			$('.age').val(ageVal);

// 			let $sleepinesVal = $('.Sleepiness').val();
// 			$sleepinesVal--;
// 			$('.Sleepiness').val($sleepinesVal);

// 			if($sleepinesVal === 0){
// 				$('.startBtn').text('Dieof sleepines!');
// 				clearInterval(timer);
// 			} else if ($hungerVal === 0) {
// 				$('.startBtn').text('Dieof Hunger!');
// 				clearInterval(timer);
// 			}else if ($boredomVal === 0) {
// 				$('.startBtn').text('Dieof Boredom!');
// 				clearInterval(timer);
// 			} else if (ageVal >= 10){
// 				$('.startBtn').text('You die of old age');
// 				clearInterval(timer);
// 			}

// 		}, 2000)
// 	}
// 	setTimer()
// })

// $('.feed').on('click', () =>{


// 	let $hungerVal = $('.Hunger').val();
// 	$hungerVal++;
// 	$('.Hunger').val($hungerVal);
// 	// console.log($hungerVal);

// 	let $ageVal = $('.age').val();
// 	$ageVal++;
// 	$('.age').val($ageVal);

// })

// $('.lightOff').on('click', () =>{

// 	let $sleepinesVal = $('.Sleepiness').val();
// 	$sleepinesVal++;
// 	$('.Sleepiness').val($sleepinesVal);
// 	// console.log($sleepinesVal);
// })

// $('.play').on('click', () =>{
// 	let $boredomVal = $('.Boredom').val();
// 	$boredomVal += 3;
// 	$('.Boredom').val($boredomVal);
// })




// /////////////////////////////////////



// // $('.play').on('click', () =>{
// // 	let $boredomVal = $('.Boredom').val();
// // 	$boredomVal += 3;
// // 	$('.Boredom').val($boredomVal);
// // 	console.log('$boredomVal');
// // })


// //=========================================
// // $('.feed').on('click', () =>{
// // 	let $hunger = $('.Hunger').val();
// // 	$hunger++;
// // 	$('.Hunger').val($hunger);
// // 	console.log($hunger);
// // })

// // $('.lightOff').on('click', () =>{
// // 	let $sleepines = $('.Sleepiness').val();
// // 	$sleepines--;
// // 	$('.Sleepiness').val($sleepines);
// // 	console.log($sleepines);
// // })

// // $('.play').on('click', () =>{
// // 	let $playTime = $('.Boredom').val();
// // 	$playTime += 1;
// // 	$('.Boredom').val($playTime);
// // 	console.log('$playTime');
// // })

// // const petAGe = () =>{
// // 	let $age = $('.perAge').val();

// // 	let age = setInterval(function(){
// // 		//console.log($('.petAge'));
// // 		$age++;
// // 		console.log($age);
// // 	}, 1000)

// // }


// // $('#monster').on('click', () =>{
// // 	const userName = $('#UserNameInput').val();
// // 	$('#userDisplay').html(userName);
// // 	console.log('Click working');
// // 	console.log(userName);
// // });



// // const setTimer = () =>{
// // 	let timer = setInterval(function(){
// // 		// console.log(time);
// // 		time++;


// // 		let $eat = $('.Hunger').val();
// // 		$eat--;
// // 		$('.Hunger').val($eat);

// // 		let $lights = $('.lightOff').val();
// // 		$lights--;
// // 		$('.lightOff').val($lights)

// // 		// let $age = $('.petAge').val();
// // 		// $age += 1;
// // 		// $('.petAge').val($startAge);

// // 		let $excercise = $('.play').val();
// // 		$excercise--;
// // 		$('.play').val($excercise)


// // 		if(time === 0){
// // 			clearInterval(timer);
// // 			console.log('Game Over');
// // 		}

// // 	}, 3000);
// // };

// // age = 0;

// // // function incrementAge() {
// // const setTimer2 = () => {
// //   let ageNew = setInterval(function() {
// //     ageNew++;

// //     let age = $('#ageCow').val()
// //     age++;
// //     $('#ageCow').val(age);

// //     if(ageStart === 25) {
// //       clearInterval(age);
// //     }
// //   }, 2000);
// // };

















