<template>
  <div class="posts-container">
    posts page
    <ul class="posts__list">
        <li v-for="(item) in posts" :key="item.id" class="posts__item">
            <post :avatarUrl="item.avatar" :username="item.username">
                <template #card >
                    <card :title="item.title"/>
                </template>
            </post>
        </li>
    </ul>
  </div>
</template>

<script>
import {post} from "./components/post";
import {card} from "./components/newCard";

import data from "./data.json";
export default {
    components:{
        posts,
        card
    },
    data(){
        return {
            posts: []
        };
    },
    created() {
        console.log(data);

        this.posts = data;
    }
};
</script>

<style lang="scss" scoped>

.posts {
    &-container{
        width: 979px;
        margin: 0 auto;
    }

    &-item {
        margin-bottom: 20px;
    }
}
</style>