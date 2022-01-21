<template>
  <div class="post">
    My post component
    <div class="post__user">
        <user :src="avatarUrl" :name="username"/>
    </div>
    <div class="post__card">
        <slot name="card"/>
    </div>
    toggler component 
    <toggle @onToggle="toggleClick"/>
    <div v-if="showComment">
        <ul class="post__comment comment__list">
            <li class="comment__item" v-for="item in 5" :key="item">
                <p>
                    <span class="comment__user">
                        User Name
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore, quos temporibus praesentium qui, enim animi quam dignissimos corporis, modi similique! Accusantium asperiores magnam numquam, unde officiis quibusdam totam vero.
                </p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { user } from "../../components/user";
import { comment } from '../comment/comment.vue';
import { toggle } from "./components/toggle";
export default {
    components: {
        user,
        toggle 
    },
    props: {
        avatarUrl: {
            type:String,
            default: "https://picsum.photos/300/300"
        },
        username: {
            type: String,
            default: 'User Loft'
        }
    },
    data () {
        return {
            showComment: true
        };
    },
    methods: {
        toggleClick(state) {
            this.showComment = state;
        }
    }
};
</script>

<style lang="scss" scoped>

.comment {
    &__user {
        font-weight: 600;
    }
}
</style>