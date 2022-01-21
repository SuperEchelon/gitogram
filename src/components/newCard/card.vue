<template>
  <div class="card">
    <div class="card__title_wrap">
        <h2 class="card__title">{{Title}}</h2>
    </div>
    <div class="card__desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, iusto ipsam nam reiciendis atque beatae perferendis obcaecati voluptatum natus earum, sapiente similique magnam voluptates iure, adipisci odit? Necessitatibus, recusandae cupiditate?
    </div>
  <div class="card__stats">
      <stats :stars="10" :forks="5" />
  </div>
  </div>
</template>

<script>
import {stats} from "./components/stats"
export default {
    components: {
        stats
    },
    props:{
        title: {
            type: String,
            default: 'Ttiel'
        }
    }
};
</script>

<style lang="scss" scoped>

.card {
    background: #FFFFFF;
    border: 1px solid #F1F1F1;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    padding: 24px 20px;
}

</style>