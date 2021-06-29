<template>
	<div class="alert">
		<p>{{ message }}</p>
	</div>
</template>

<script>
export default {
	name: 'TheAlert',
	props: {
		message: {
			type: String,
			required: true
		}
	}
};
</script>

<style>
  p {
    margin: 0;
  }
</style>