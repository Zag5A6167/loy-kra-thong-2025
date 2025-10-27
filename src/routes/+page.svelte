<script>
  import krathongImg from "$lib/assets/krathong.png";
  import { fly } from "svelte/transition";
</script>

<h1 class="title-text">ลอยกระทง2025</h1>
<div class="moon"></div>
<div class="floor"></div>
<img src={krathongImg} alt="krathong" class="krathong" />
<div class="water-container">
  <div class="wave3"></div>
</div>

<style>

  .title-text{
    font-family: "Sarabun", sans-serif;
    font-size: 3rem;
    color: #fff; 
    text-align: center;
    position: absolute;
    top: 5rem;
    width: 100%;
    text-shadow: 0 0 10px rgba(255, 255, 200, 0.7); 
    z-index: 10000;
  }  

  .floor {
    width: 100%;
    height: 2rem;
    position: absolute;
    bottom: 14rem;

    background-color: antiquewhite;
  }

  .krathong {
    position: absolute;
    bottom: 12rem;

    width: 8rem;
    z-index: 9999;
    animation:
      bobing 10s linear infinite,
      floatLeftToRight 40s linear infinite;
  }

  .water-container {
    width: 100%;
    height: 15rem;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #004d80;
    z-index: 999;
    animation: bgColorChange 40s linear infinite alternate;
  }

  .moon {
    width: 2rem;
    height: 2rem;
    position: absolute;
    width: 5vw;
    height: 5vw;
    top: 3vh;
    right: 3vw;
    width: 60px;
    height: 60px;
    background-color: white;
    box-shadow: 0 0 15px 5px rgba(255, 255, 200, 0.7);
    border-radius: 50%;
  }

  .water-container::before {
    content: "";
    display: block;
    width: 200%;
    left: 0;
    top: -30px;
    position: absolute;
    background-color: #0a7bb4;
    height: 5rem;
    border-radius: 45% 55% / 100% 0;
    animation: wave 12s linear infinite;
  }

  .water-container::after {
    content: "";
    display: block;
    width: 200%;
    left: 0;
    top: 0px;
    background-color: #33ccff;
    height: 2rem;
    border-radius: 45% 55% / 100% 0;
    animation: wave 20s linear infinite reverse;
  }

  .wave3 {
    display: block;
    width: 200%;
    left: 0;
    top: -30px;
    position: absolute;

    background-color: #005e8d;
    height: 4rem;
    border-radius: 40% 60% / 100% 0;

    animation: wave 10s linear infinite;
  }

  @keyframes wave {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }

  @keyframes bgColorChange {
    0% {
      background-color: #004d80;
    }
    50% {
      background-color: #0d6d9d;
    }
    100% {
      background-color: #004d80;
    }
  }

  @keyframes floatLeftToRight {
    0% {
      left: -10%;
    }
    100% {
      left: 110%;
    }
  }

  @keyframes bobing {
    0% {
      transform: translateY(0) rotate(-5deg);
    }
    50% {
      transform: translateY(-0.5rem) rotate(5deg);
    }
    100% {
      transform: translateY(0) rotate(-5deg);
    }
  }
</style>
