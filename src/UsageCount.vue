<template>
	<div class="usage-count" v-if="isShow && !isClose">
		<div class="l-head">
			<div class="usage-count__title">使用數</div>
			<button class="usage-count__close" @click="close">x</button>
		</div>
		<ul class="usage-count__list">
			<li class="usage-count__item" v-for="(val, key) of usageCount">
				<span class="item-title">{{ key }}</span>: {{ val }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'UsageCount',
	data() {
		return {
			isClose: false,
		};
	},
	computed: {
		isShow() {
			return this.$page?.frontmatter?.usage_count;
		},
		usageCount() {
			return this.$page.frontmatter?.usage_count;
		},
	},
	methods: {
		close() {
			this.isClose = true;
		},
	},
};
</script>

<style lang="scss" scoped>
.l-head {
	display: inline-flex;
	width: 100%;
}

.usage-count {
	font-size: 1rem;
	z-index: 9999;
	position: fixed;
	background: #dedede;
	border-radius: 4px;
	top: 100px;
	right: 10px;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	opacity: 0.7;
	transition: 0.3s ease-in-out;

	&:hover {
		opacity: 1;
	}

	&__close {
		border-radius: 4px;
		border: none;
		width: 26px;
		height: 26px;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		right: 4px;
		top: 4px;
		cursor: pointer;
	}

	&__title {
		font-size: 1.2rem;
		flex: 1;
		margin-bottom: 10px;
	}

	&__item {
		font-family: monospace;

		.item-title {
			font-weight: bold;
		}
	}
}
</style>
