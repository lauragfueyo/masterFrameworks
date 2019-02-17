<template>
    <v-flex xs12 sm3>
      <v-card>
        <v-img
          :src="member.avatar_url"
          aspect-ratio="1.3"
        ></v-img>
        <v-card-title primary-title>
          <div>
            <h2>{{member.login}}</h2>
            <p>{{member.id}}</p>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Member } from "../../model/member";

interface Props {
  member: PropOptions<Member>;
}

export default Vue.extend({
  name: "MemberRow",
  props: {
    member: {}
  } as Props
});
</script>

<style module>

</style>
