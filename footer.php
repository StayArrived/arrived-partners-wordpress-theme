<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package arrivedpartners
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<div class="site-info">
			<div class="col1">
				<div class="logo-container">
					<?php the_custom_logo(); ?>
				</div>
			</div>
			<div class="col2">
				<h3>Company</h3>
				<a href="/faq"><p>FAQ</p></a>
				<a href="https://twobeta.org"><p>Two Beta</p></a>
				<a href="/privacy"><p>Privacy</p></a>
			</div>
			<div class="col3">
				<h3>Get in touch</h3>
				<p>(480) 624 - 5200</p>
				<p>hello@arrivedpartners.com</p>
			</div>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
