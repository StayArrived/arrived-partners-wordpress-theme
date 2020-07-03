<?php
/**
 * The landing page template file
 *
 * @package arrivedpartners
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main front-page">

		<div class="splash-container">
			<div class="wp-block-video splash-video-container">
				<video autoplay loop muted poster="https://github.com/stayarrived/arrived-partners-assets/blob/master/website-lifestyle-video.jpeg?raw=true" src="https://github.com/stayarrived/arrived-partners-assets/blob/master/website-lifestyle-video.mp4?raw=true"></video>
			</div>
			<div class="splash-text-container">
				<h2 class="splash-text">YOU HAVE ARRIVED.</h2>
			</div>
			<p class="splash-tooltip">SCROLL DOWN</p>
		</div>

		<?php
		if ( have_posts() ) :

			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content', get_post_type() );

			endwhile;

			// the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
