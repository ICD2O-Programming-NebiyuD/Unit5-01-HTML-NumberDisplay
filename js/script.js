// Copyright (c) 2020 Mr. Coxall All rights reserved

//

// Created by: Mr. Coxall

// Created on: Sep 2020

// This file contains the JS functions for index.html

"use strict"

function numberDisplay() {

    let numbers = ""

    let numbers2 = ""

    let userNumMin = parseInt(document.getElementById('minNumber').value)

    let userNumMax = parseInt(document.getElementById('maxNumber').value)

    let counter = userNumMin

    while (counter == userNumMin) {

        numbers = numbers + counter + "<br>"

        counter = counter +1

    }

    while (counter <= userNumMax) {

        numbers2 = numbers2 + counter + "<br>"

        counter = counter +1

    }



    document.getElementById('min').innerHTML = numbers

    document.getElementById('max').innerHTML = numbers2

}