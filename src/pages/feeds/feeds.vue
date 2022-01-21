<template>
    <div class="topline">
        <topline>
            <template #headline>
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories-item" v-for="story in stories" :key="story.id">
                        <story-user-item
                            :avatar="story.avatar"
                            :username="story.username"
                            @onPress="handlePress(story.id)"
                        />
                    </li>
                </ul>
            </template>
        </topline>
    </div>
</template>

<script>
    import { storyUserItem }  from "../../components/storyUserItem";
    import { topline } from "../../components/topline";
    import { icon } from "../../icons";
    import { post } from "../../components/post";
    import  data  from "./data.json";

    export default {
        name: "feeds",  
        components: {
            topline,
            icon,
            storyUserItem,
            post
        },
        data() {
            return {
                data
            }
        }
    }
</script>

<style lang="scss" scoped src="./feeds.scss"></style>