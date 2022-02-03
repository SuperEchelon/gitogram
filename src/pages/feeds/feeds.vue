<template>
    <div class="topline">
        <topline>
            <template #headline>
                <div class="logo">
                <logo />
                </div>
                <navBar />
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories-item" v-for="story in stories" :key="story.id">
                    <storyUserItem
                      :avatar="story.avatar"
                      :username="story.username"
                      @onPress='handlePress(story.id)'
                    />
                    </li>
                </ul>
            </template>
        </topline>
    </div>
    <div class="container">
        <ul class="posts">
            <li class="posts__item" v-for="n in 5" :key="n">
                <post>
                    <template #card>
                        <card />
                    </template>
                </post>
            </li>
        </ul>
    </div>
</template>
<script>
import { storyUserItem } from '../../components/storyUserItem'
import { logo } from '../../components/logo'
import { topline } from '../../components/topline'
import { navBar } from '../../components/navBar'
import { post } from '../../components/post'
import { card } from '../../components/сard'
import users from './user.json'
// import * as api from '../../api'

export default {
  name: 'feeds',
  components: {
    topline,
    logo,
    storyUserItem,
    post,
    card,
    navBar
  },
  data () {
    return {
      story: []
    }
  },
  mathods: {},
  async created () {
    try {
      // const { data } = await api.trandings.getTrendings()
      // this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
console.log(users)
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
