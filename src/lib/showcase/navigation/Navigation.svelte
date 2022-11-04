<script lang="ts">
	import pictureOnTop from '../ChariteColorsInACircle.png'
	import { menuContent } from '../menuContent'
</script>

<nav>
	<div class="container m-0 p-0">
		<img class="navbar-brand mx-2" src={pictureOnTop} alt="kein bild zu sehen..." />
	</div>
	<div>
		<ul class="list-unstyled">
			{#each menuContent.chapters as chapter}
				<li class="mb-1">
					<a href={'http://localhost:3000/' + chapter.ownRoute.path}>
						{chapter.ownRoute.displayName}
					</a>

					<div>
						<ul class="list-unstyled">
							{#each chapter.containedRoutes as article}
								<li>
									<a href={'http://localhost:3000/' + chapter.ownRoute.path + '/' + article.path}>
										{article.displayName}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</nav>
