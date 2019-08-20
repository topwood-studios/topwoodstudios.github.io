import React from 'react';
import styled from 'styled-components';
import { colors, glitch } from '../utils/theme';

const Glitch = ({ }) => (
  <Item class="grid__item">
    <div className="glitch glitch--style-6">
      <div className="glitch__img" />
      <div className="glitch__img" />
      <div className="glitch__img" />
      <div className="glitch__img" />
      <div className="glitch__img" />
    </div>
    <h2 className="grid__item-title">
      Wide
      <span>Distraction</span>
    </h2>
  </Item>
  );

export default Glitch;

const Item = styled.div`
 	--gap-horizontal: 3px;
 	--gap-vertical: 70px;
 	--time-anim: 2.25s;
 	--blend-mode-1: none;
 	--blend-mode-2: none;
 	--blend-mode-3: overlay;
 	--blend-mode-4: none;
 	--blend-mode-5: none;
 	--blend-color-1: transparent;
 	--blend-color-2: transparent;
 	--blend-color-3: rgba(255,255,255,0.2);
 	--blend-color-4: transparent;
 	--blend-color-5: transparent;


.grid__item-title {
	position: absolute;
	margin: 0;
	font-size: 6vw;
	color: var(--color-title);
	font-family: 'Barlow', sans-serif;
	font-weight: 800;
	padding: 30vh 0.5em 0;
	top: 0;
	pointer-events: none;
	line-height: 1;
}

.grid__item:nth-child(odd) .grid__item-title {
	right: 0;
	text-align: right;
	padding-top: 10vh;
}

.grid__item-title span {
	display: block;
	position: relative;
	font-size: 50%;
	font-weight: 500;
	opacity: 0;
	color: var(--color-subtitle);
}

.glitch:hover + .grid__item-title span {
	opacity: 1;
	animation: glitch-anim-text 0.5s linear;
}

@media screen and (max-width: 55em) {
	.grid { grid-template-columns: 100%; margin-top: 3em; }
	.grid__item { margin: 0 0 3em; }
	.grid__item:nth-child(odd) { margin-top: 0; }
	.grid__item-title, .grid__item:nth-child(odd) .grid__item-title { font-size: 2em; text-align: center; width: 100%; padding: 0; top: 20%; }
}

/* Glitch styles */
.glitch {
	position: relative;
	width: var(--glitch-width);
	max-width: 400px;
	height: var(--glitch-height);
	max-height: calc(400px * 1.25);
	overflow: hidden;
	margin: 0 auto;
}

.glitch:hover {
	cursor: pointer;
}

.glitch__img {
	position: absolute;
	top: calc(-1 * var(--gap-vertical));
	left: calc(-1 * var(--gap-horizontal));
	width: calc(100% + var(--gap-horizontal) * 2);
	height: calc(100% + var(--gap-vertical) * 2);
	background: url(../img/1.jpg) no-repeat 50% 0;
	background-color: var(--blend-color-1);
	background-size: cover;
	transform: translate3d(0,0,0);
	background-blend-mode: var(--blend-mode-1);
}

.glitch--style-2 .glitch__img {
	background-image: url(../img/2.jpg);
}

.glitch--style-3 .glitch__img {
	background-image: url(../img/3.jpg);
}

.glitch--style-4 .glitch__img {
	background-image: url(../img/4.jpg);
}

.glitch--style-5 .glitch__img {
	background-image: url(../img/5.jpg);
}

.glitch--style-6 .glitch__img {
	background-image: url(../img/6.jpg);
}

/* Set the background colors for the glitch images*/
.glitch__img:nth-child(2) {
	background-color: var(--blend-color-2);
	background-blend-mode: var(--blend-mode-2);
}

.glitch__img:nth-child(3) {
	background-color: var(--blend-color-3);
	background-blend-mode: var(--blend-mode-3);
}

.glitch__img:nth-child(4) {
	background-color: var(--blend-color-4);
	background-blend-mode: var(--blend-mode-4);
}

.glitch__img:nth-child(5) {
	background-color: var(--blend-color-5);
	background-blend-mode: var(--blend-mode-5);
}

/* Hide all images except the first one */
.glitch__img:nth-child(n+2) {
	opacity: 0;
}

/* Hovers */

/* On hover we show the 2nd, 3rd, 4th and 5th image*/
.glitch:hover .glitch__img:nth-child(n+2) {
	opacity: 1;
}

/* Hover animations for horizontal case */
.glitch:hover .glitch__img:nth-child(2) {
	transform: translate3d(var(--gap-horizontal),0,0);
	animation: glitch-anim-1-horizontal var(--time-anim) infinite linear alternate;
}

.glitch:hover > .glitch__img:nth-child(3) {
	transform: translate3d(calc(-1 * var(--gap-horizontal)),0,0);
	animation: glitch-anim-2-horizontal var(--time-anim) infinite linear alternate;
}

.glitch:hover > .glitch__img:nth-child(4) {
	transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0) scale3d(-1,-1,1);
	animation: glitch-anim-3-horizontal var(--time-anim) infinite linear alternate;
}

/* Hover animations for vertical case */
.glitch--vertical:hover .glitch__img:nth-child(2) {
	transform: translate3d(0, var(--gap-vertical), 0);
	animation: glitch-anim-1-vertical var(--time-anim) infinite linear alternate;
}

.glitch--vertical:hover > .glitch__img:nth-child(3) {
	transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0);
	animation: glitch-anim-2-vertical var(--time-anim) infinite linear alternate;
}

.glitch--vertical:hover > .glitch__img:nth-child(4) {
	transform: translate3d(calc(-1 * var(--gap-horizontal)), 0, 0) scale3d(-1,-1,1);
	animation: glitch-anim-3-vertical var(--time-anim) infinite linear alternate;
}

/* Hover flash animation on last image */
.glitch:hover > .glitch__img:nth-child(5) {
	animation: glitch-anim-flash 0.5s steps(1,end) infinite;
}

/* Animations */

/* Horizontal */
@keyframes glitch-anim-1-horizontal {
	0% { 
		-webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
		clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
	}
	10% {
		-webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
		clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
	}
	20% {
		-webkit-clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
		clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
	}
	30% {
		-webkit-clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
		clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
	}
	40% {
		-webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
		clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
	}
	50% {
		-webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
		clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
	}
	60% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
		clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
	}
	70% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
		clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
	}
	80% {
		-webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
		clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
	}
	90% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
		clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
	}
	100% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
		clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
	}
}

@keyframes glitch-anim-2-horizontal {
	0% { 
		-webkit-clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
		clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
	}
	15% {
		-webkit-clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
		clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
	}
	22% {
		-webkit-clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
		clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
	}
	31% {
		-webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
		clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
	}
	45% {
		-webkit-clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
		clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
	}
	51% {
		-webkit-clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
		clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
	}
	63% {
		-webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
		clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
	}
	76% {
		-webkit-clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
		clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
	}
	81% {
		-webkit-clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
		clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
	}
	94% {
		-webkit-clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
		clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
	}
	100% {
		-webkit-clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
		clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
	}
}

@keyframes glitch-anim-3-horizontal {
	0% { 
		-webkit-clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
		clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
	}
	5% {
		-webkit-clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
		clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
	}
	10% {
		-webkit-clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
		clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
	}
	25% {
		-webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
		clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
	}
	27% {
		-webkit-clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
		clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
	}
	30% {
		-webkit-clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
		clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
	}
	33% {
		-webkit-clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
		clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
	}
	37% {
		-webkit-clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
		clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
	}
	40% {
		-webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
		clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
	}
	45% {
		-webkit-clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
		clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
	}
	50% {
		-webkit-clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
		clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
	}
	53% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
		clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
	}
	57% {
		-webkit-clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
		clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
	}
	60% {
		-webkit-clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
		clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
	}
	65% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
		clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
	}
	70% {
		-webkit-clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
		clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
	}
	73% {
		-webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
		clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
	}
	80% {
		-webkit-clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
		clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
	}
	100% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
		clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
	}
}

/* Vertical */
@keyframes glitch-anim-1-vertical {
	0% { 
		-webkit-clip-path: polygon(2% 0, 5% 0, 5% 100%, 2% 100%);
		clip-path: polygon(2% 0, 5% 0, 5% 100%, 2% 100%);
	}
	10% {
		-webkit-clip-path: polygon(15% 0, 15% 0, 15% 100%, 15% 100%);
		clip-path: polygon(15% 0, 15% 0, 15% 100%, 15% 100%);
	}
	20% {
		-webkit-clip-path: polygon(10% 0, 20% 0, 20% 100%, 10% 100%);
		clip-path: polygon(10% 0, 20% 0, 20% 100%, 10% 100%);
	}
	30% {
		-webkit-clip-path: polygon(1% 0, 2% 0, 2% 100%, 1% 100%);
		clip-path: polygon(1% 0, 2% 0, 2% 100%, 1% 100%);
	}
	40% {
		-webkit-clip-path: polygon(33% 0, 33% 0, 33% 100%, 33% 100%);
		clip-path: polygon(33% 0, 33% 0, 33% 100%, 33% 100%);
	}
	50% {
		-webkit-clip-path: polygon(44% 0, 44% 0, 44% 100%, 44% 100%);
		clip-path: polygon(44% 0, 44% 0, 44% 100%, 44% 100%);
	}
	60% {
		-webkit-clip-path: polygon(50% 0, 20% 0, 20% 100%, 50% 100%);
		clip-path: polygon(50% 0, 20% 0, 20% 100%, 50% 100%);
	}
	70% {
		-webkit-clip-path: polygon(70% 0, 70% 0, 70% 100% 70%, 70% 100%);
		clip-path: polygon(70% 0, 70% 0, 70% 100% 70%, 70% 100%);
	}
	80% {
		-webkit-clip-path: polygon(80% 0, 80% 0, 80% 100% 80%, 80% 100%);
		clip-path: polygon(80% 0, 80% 0, 80% 100% 80%, 80% 100%);
	}
	90% {
		-webkit-clip-path: polygon(50% 0, 55% 0, 55% 100%, 50% 100%);
		clip-path: polygon(50% 0, 55% 0, 55% 100%, 50% 100%);
	}
	100% {
		-webkit-clip-path: polygon(70% 0, 80% 0, 80% 100%, 70% 100%);
		clip-path: polygon(70% 0, 80% 0, 80% 100%, 70% 100%);
	}
}

@keyframes glitch-anim-2-vertical {
	0% { 
		-webkit-clip-path: polygon(25% 0, 30% 0, 30% 100%, 25% 100%);
		clip-path: polygon(25% 0, 30% 0, 30% 100%, 25% 100%);
	}
	15% {
		-webkit-clip-path: polygon(3% 0, 3% 0, 3% 100%, 3% 100%);
		clip-path: polygon(3% 0, 3% 0, 3% 100%, 3% 100%);
	}
	22% {
		-webkit-clip-path: polygon(5% 0, 20% 0, 20% 100%, 5% 100%);
		clip-path: polygon(5% 0, 20% 0, 20% 100%, 5% 100%);
	}
	31% {
		-webkit-clip-path: polygon(20% 0, 20% 0, 20% 100%, 20% 100%);
		clip-path: polygon(20% 0, 20% 0, 20% 100%, 20% 100%);
	}
	45% {
		-webkit-clip-path: polygon(40% 0, 40% 0, 40% 100%, 40% 100%);
		clip-path: polygon(40% 0, 40% 0, 40% 100%, 40% 100%);
	}
	51% {
		-webkit-clip-path: polygon(52% 0, 59% 0, 59% 100%, 52% 100%);
		clip-path: polygon(52% 0, 59% 0, 59% 100%, 52% 100%);
	}
	63% {
		-webkit-clip-path: polygon(60% 0, 60% 0, 60% 100%, 60% 100%);
		clip-path: polygon(60% 0, 60% 0, 60% 100%, 60% 100%);
	}
	76% {
		-webkit-clip-path: polygon(75% 0, 75% 0, 75% 100%, 75% 100%);
		clip-path: polygon(75% 0, 75% 0, 75% 100%, 75% 100%);
	}
	81% {
		-webkit-clip-path: polygon(65% 0, 40% 0, 40% 100%, 65% 100%);
		clip-path: polygon(65% 0, 40% 0, 40% 100%, 65% 100%);
	}
	94% {
		-webkit-clip-path: polygon(45% 0, 50% 0, 50% 100%, 45% 100%);
		clip-path: polygon(45% 0, 50% 0, 50% 100%, 45% 100%);
	}
	100% {
		-webkit-clip-path: polygon(14% 0, 33% 0, 33% 100%, 14% 100%);
		clip-path: polygon(14% 0, 33% 0, 33% 100%, 14% 100%);
	}
}

@keyframes glitch-anim-3-vertical {
	0% { 
		-webkit-clip-path: polygon(1% 0, 3% 0, 3% 100%, 1% 100%);
		clip-path: polygon(1% 0, 3% 0, 3% 100%, 1% 100%);
	}
	5% {
		-webkit-clip-path: polygon(10% 0, 9% 0, 9% 100%, 10% 100%);
		clip-path: polygon(10% 0, 9% 0, 9% 100%, 10% 100%);
	}
	10% {
		-webkit-clip-path: polygon(5% 0, 6% 0 6% 100%, 5% 100%);
		clip-path: polygon(5% 0, 6% 0 6% 100%, 5% 100%);
	}
	25% {
		-webkit-clip-path: polygon(20% 0, 20% 0, 20% 100%, 20% 100%);
		clip-path: polygon(20% 0, 20% 0, 20% 100%, 20% 100%);
	}
	27% {
		-webkit-clip-path: polygon(10% 0, 10% 0, 10% 100%, 10% 100%);
		clip-path: polygon(10% 0, 10% 0, 10% 100%, 10% 100%);
	}
	30% {
		-webkit-clip-path: polygon(30% 0, 25% 0, 25% 100%, 30% 100%);
		clip-path: polygon(30% 0, 25% 0, 25% 100%, 30% 100%);
	}
	33% {
		-webkit-clip-path: polygon(15% 0, 16% 0, 16% 100%, 15% 100%);;
		clip-path: polygon(15% 0, 16% 0, 16% 100%, 15% 100%);
	}
	37% {
		-webkit-clip-path: polygon(40% 0, 39% 0, 39% 100%, 40% 100%);;
		clip-path: polygon(40% 0, 39% 0, 39% 100%, 40% 100%);
	}
	40% {
		-webkit-clip-path: polygon(20% 0, 21% 0, 21% 100%, 20% 100%);
		clip-path: polygon(20% 0, 21% 0, 21% 100%, 20% 100%); 
	}
	45% {
		-webkit-clip-path: polygon(60% 0, 55% 0, 55% 100%, 60% 100%);
		clip-path: polygon(60% 0, 55% 0, 55% 100%, 60% 100%);
	}
	50% {
		-webkit-clip-path: polygon(30% 0, 31% 0, 31% 100%, 30% 100%);
		clip-path: polygon(30% 0, 31% 0, 31% 100%, 30% 100%);
	}
	53% {
		-webkit-clip-path: polygon(70% 0, 69% 0, 69% 100%, 70% 100%);
		clip-path: polygon(70% 0, 69% 0, 69% 100%, 70% 100%);
	}
	57% {
		-webkit-clip-path: polygon(40% 0, 41% 0, 41% 100%, 40% 100%);
		clip-path: polygon(40% 0, 41% 0, 41% 100%, 40% 100%);
	}
	60% {
		-webkit-clip-path: polygon(80% 0, 75% 0, 75% 100%, 80% 100%);
		clip-path: polygon(80% 0, 75% 0, 75% 100%, 80% 100%);
	}
	65% {
		-webkit-clip-path: polygon(50% 0, 51% 0, 51% 100%, 50% 100%);
		clip-path: polygon(50% 0, 51% 0, 51% 100%, 50% 100%);
	}
	70% {
		-webkit-clip-path: polygon(90% 0, 90% 0, 90% 100%, 90% 100%);
		clip-path: polygon(90% 0, 90% 0, 90% 100%, 90% 100%);
	}
	73% {
		-webkit-clip-path: polygon(60% 0, 60% 0, 60% 100%, 60% 100%);
		clip-path: polygon(60% 0, 60% 0, 60% 100%, 60% 100%);
	}
	80% {
		-webkit-clip-path: polygon(100% 0, 99% 0, 99% 100%, 100% 100%);
		clip-path: polygon(100% 0, 99% 0, 99% 100%, 100% 100%);
	}
	100% {
		-webkit-clip-path: polygon(70% 0, 71% 0, 71% 100%, 70% 100%);
		clip-path: polygon(70% 0, 71% 0, 71% 100%, 70% 100%);
	}
}

@keyframes glitch-anim-text {
	0% { 
		opacity: 1;
		transform: translate3d(-10px,0,0) scale3d(-1,-1,1);
		-webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
		clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
	}
	10% {
		-webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
		clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
	}
	20% {
		-webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
		clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
	}
	35% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
		clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
	}
	50% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
		clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
	}
	60% {
		-webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
		clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
	}
	70% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
		clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
	}
	80% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
		clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
	}
	90% {
		transform: translate3d(-10px,0,0) scale3d(-1,-1,1);
	}
	100% {
		opacity: 1;
		transform: translate3d(0,0,0) scale3d(1,1,1);
		-webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
	}
}

/* Flash */
@keyframes glitch-anim-flash {
	0% { 
		opacity: 0.2; 
		transform: translate3d(var(--gap-horizontal), var(--gap-vertical), 0);
	}
	33%, 100% { 
		opacity: 0;
		transform: translate3d(0,0,0);
	}
}


`;
