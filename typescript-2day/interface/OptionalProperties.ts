interface CraftBeer {
    name: string;
    // ? 는 선택적 프로퍼티로써 인터페이스에 정의되어 있는 속성을 모두 꼭 사용할 필요가 없다.
    hop?: number;
  }
  
  let myBeer = {
    name: "Saporo",
  };
  
  function brewBeer(beer: CraftBeer) {
    console.log(beer.name); // Saporo
  }
  
  brewBeer(myBeer);