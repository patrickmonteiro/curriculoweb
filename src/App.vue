<template>
    <!-- <div class="columns is-multiline is-centered columns-head">
        <div class="column is-9 ">
          <div class="columns column-background">
            
            <div class="column is-6 is-12-mobile has-text-centered-mobile has-text-left-desktop">
              <figure class="image is-128x128 figure-head" >
                <img src="http://patrickmonteiro.com.br/img/patrickmonteiro3.png" class="img-circle-head">
              </figure>
            </div>

            <div class="column is-6 is-12-mobile has-text-right-desktop has-text-centered-mobile text-bottom-head">
                <h1 class="is-size-2 is-size-4-mobile has-text-weight-semibold">PATRICK MONTEIRO</h1>
                <h3 class="is-size-6 has-text-white is-italic">Especialista em Desenvolvimento Web</h3>
            </div>
          </div>

          <div class="columns">
             <div class="column is-4 is-4-mobile has-text-left column-background">
                <p>Teste</p>
            </div>
          </div>
        
        </div>
    </div> -->
    <div>
      <section class="hero is-primary is-bold hero-bottom">
        <div class="hero-body">
          <div class="container">

            <div class="level">
              <div class="level-left">
                <div>
                  <h1 class="title">
                    Patrick Monteiro
                  </h1>
                  <h2 class="subtitle">
                    Especialista em Desenvolvimento Web
                  </h2>
                   <a class="button is-primary" style="border-radius:50%" title="Github">
                      <span class="icon">
                        <icon name="brands/github" scale="1.7"></icon>
                      </span>
                    </a>
                    <a class="button is-primary" style="border-radius:50%">
                      <span class="icon">
                        <icon name="brands/facebook-f" scale="1.3"></icon>
                      </span>
                    </a>
                    <a class="button is-primary" style="border-radius:50%">
                      <span class="icon">
                        <icon name="camera" scale="1"></icon>
                      </span>
                    </a>
                </div>
              </div>
              <div class="level-right has-text-centered">
                <div class="level-item">
                    <figure class="image is-128x128 figure-head" >
                    <img src="http://patrickmonteiro.com.br/img/patrickmonteiro3.png" class="img-circle-head">
                  </figure>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="tile is-ancestor">
            
              <div class="tile is-vertical is-4">
                <div class="tile">
                  <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-primary">
                      <!-- <p class="title">Vertical...</p> -->
                      <p class="is-size-5"> <icon name="map-pin" scale="1.1" style="width: 1em"></icon>  Belém-PA</p> 
                      <p class="is-size-5"> <icon name="envelope" scale="1.1" style="width: 1em"></icon>  Belém-PA</p> 
                      <p class="is-size-5"> <icon name="envelope" scale="1.1" style="width: 1em"></icon> <a href="http:www.patrickmonteiro.com.br">patrickmonteiro.com.br</a></p>         
                    </article>
                    <!-- <article class="tile is-child notification is-warning">
                      <p class="title">...tiles</p>
                      <p class="subtitle">Bottom tile</p>
                    </article> -->
                  </div>
                </div>
              </div>
              
              <div class="tile is-vertical is-8">
                <div class="tile">
                  <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-primary is-bold ">
                      <p class="title">Sobre Mim</p>
                      <p class="is-size-5">
                        Sou um Abaetetubense morando em Belém há mais ou menos 10 anos. Trabalho como Analista de Sistemas na W3AS, 
                        sendo o responsável por otimizar, melhorar e inovar a arquitetura Front-end dos novos produtos, e ajudar na migração de 
                        produtos legados. Possuo certificação internacional em UX, e busco disseminar a cultura UX pela empresa.</p>
                      <p  class="is-size-5">
                        Nas horas vagas escrevo artigos para o blog <a href="http://viladosilicio.com.br">Vila do Silício</a>. Gosto de vôlei, livros, séries, rock e games.
                      </p>
                    </article>
                    <!-- <article class="tile is-child notification is-warning">
                      <p class="title">...tiles</p>
                      <p class="subtitle">Bottom tile</p>
                    </article> -->
                  </div>
                </div>
              </div>
              
            </div>

        </div>
      </section>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
}
.img-circle-head{
  border-radius: 50%
}
.hero-bottom{
  margin-bottom: 0.8rem;
}
section {
  /* border: 1px solid black; */
}

.container {
  /* border: 1px solid black; */
}

.column {
  border: 1px solid black;
}
.teste {
   border: 1px solid black;
}

/* .column{
  margin: 0.2em;
  position: relative;
}
.columns-head{
  margin-top: 1em;
}
.column-background {
  background: #8A2BE2;
  border: solid black 1px;
  color: white;
  text-align: center;
  border-radius: 10px;;
  margin: 0.2rem;
}
.text-bottom-head{
 align-self: flex-end;
 padding-right: 2em;
} */
</style>
