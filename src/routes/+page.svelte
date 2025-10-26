<script>

</script>

<div class="water-container">
  <div class="wave3"></div>
</div>

<style>


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
  .water-container::before{
    content: "";
    display:block;
    width: 200%;
    left: 0;
    top: -30px;
    position: absolute;
    background-color: #0a7bb4;
    height: 5rem;
    border-radius: 45% 55% / 100% 0;
    animation: wave 12s linear infinite ;
  }

  .water-container::after{
    content: "";
    display:block;
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

  @keyframes wave{
    0%{
      transform: translate3d(0,0,0);
    }
    100%{
      transform: translate3d(-50%,0,0);
    }
  }

  @keyframes bgColorChange{
    0% { background-color: #004d80; }
    50% { background-color: #0d6d9d; } 
    100% { background-color: #004d80; } 
  }
</style>