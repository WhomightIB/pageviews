<!DOCTYPE html>
<html>
  <head>
    <?php include '../../_head.php'; ?>
    <title>
      <?php echo $I18N->msg( 'massviews-title' ) . ' - ' . $I18N->msg( 'faq' ); ?>
    </title>
  </head>
  <body>
    <div class="container">
      <header class="col-lg-12 text-center">
        <h4>
          <strong>
            <?php echo $I18N->msg( 'massviews-title' ); ?>
          </strong>
          <small class="app-description">
            <?php echo $I18N->msg( 'faq' ); ?>
          </small>
        </h4>
      </header>
      <main class="col-lg-10 col-lg-offset-1">
        <ul class="list-group">
          <li class="list-group-item">
            <p>
              <strong><?php echo $I18N->msg( 'faq-throttle-wait-title', array( 'variables' => array( 90 ), 'parsemag' => true ) ); ?></strong>
            </p>
            <p>
              <?php echo $I18N->msg( 'faq-throttle-wait-body', array( 'variables' => array( 90 ), 'parsemag' => true ) ); ?>
            </p>
          </li>
          <li class="list-group-item" id="sources">
            <p>
              <strong><?php echo $I18N->msg( 'faq-massviews-sources-title' ); ?></strong>
            </p>
            <ul class="faq-ul">
              <li>
                <?php $pagePileId = $I18N->msg( 'page-pile-id' ); ?>
                <?php $pagePileLink = "<a href='//tools.wmflabs.org/pagepile' target='_blank'>Page Pile</a>"; ?>
                <i><?php echo $pagePileId; ?></i>
                <?php echo $I18N->msg( 'faq-massviews-sources-pagepile', array( 'variables' => array( $pagePileLink ) ) ); ?>
              </li>
              <li>
                <?php $categoryLink = "<a href='https://en.wikipedia.org/wiki/Category:Folk_musicians_from_New_York'>https://en.wikipedia.org/wiki/Category:Folk_musicians_from_New_York</a>"; ?>
                <i><?php echo $I18N->msg( 'category-url' ); ?></i>
                <?php echo $I18N->msg( 'faq-massviews-sources-category-url', array( 'variables' => array( $categoryLink ) ) ); ?>
              </li>
              <li>
                <?php $templateLink = "<a href='https://en.wikipedia.org/wiki/Template:Infobox_Olympic_games'>https://en.wikipedia.org/wiki/Template:Infobox_Olympic_games</a>"; ?>
                <i><?php echo $I18N->msg( 'template-url' ); ?></i>
                <?php echo $I18N->msg( 'faq-massviews-sources-template-url', array( 'variables' => array( $templateLink ) ) ); ?>
              </li>
            </ul>
          </li>
          <li class="list-group-item" id="category_subject_toggle">
            <p>
              <strong><?php echo $I18N->msg( 'faq-massviews-subject-page-title', array( 'variables' => array( $I18N->msg( 'category-subject-toggle' ) ) ) ); ?></strong>
            </p>
            <p>
              <?php echo $I18N->msg( 'faq-massviews-subject-page-body' ); ?>
            </p>
          </li>
          <li class="list-group-item">
            <?php $backfillDate = $I18N->msg( 'july' ) . ' 2015'; ?>
            <p>
              <strong><?php echo $I18N->msg( 'faq-old-data-title', array( 'variables' => array( $backfillDate ) ) ); ?></strong>
            </p>
            <p>
              <?php echo $I18N->msg( 'faq-old-data-body', array( 'variables' => array( $backfillDate ) ) ); ?>
            </p>
          </li>
          <li class="list-group-item">
            <p>
              <strong><?php echo $I18N->msg( 'faq-todays-date-title' ); ?></strong>
            </p>
            <p>
              <?php echo $I18N->msg( 'faq-todays-date-body' ); ?>
            </p>
          </li>
          <li class="list-group-item" id="agents">
            <p>
              <strong><?php echo $I18N->msg( 'faq-agents-title' ); ?></strong>
            </p>
            <ul class="faq-ul">
              <li>
                <i><?php echo $I18N->msg( 'user' ); ?></i>
                <?php echo $I18N->msg( 'faq-agents-user' ); ?>
              </li>
              <li>
                <i><?php echo $I18N->msg( 'spider' ); ?></i>
                <?php echo $I18N->msg( 'faq-agents-spider' ); ?>
              </li>
              <li>
                <i><?php echo $I18N->msg( 'bot' ); ?></i>
                <?php echo $I18N->msg( 'faq-agents-bot' ); ?>
              </li>
            </ul>
          </li>
          <li class="list-group-item">
            <p>
              <strong><?php echo $I18N->msg( 'faq-bug-report-title' ); ?></strong>
            </p>
            <p>
              <?php echo $I18N->msg( 'faq-bug-report-body' ); ?>
            </p>
          </li>
        </ul>
        <div class="col-lg-12 text-center tm">
          <a href="/massviews">
            <?php echo $I18N->msg( 'faq-return-to', array( 'variables' => array( $I18N->msg( 'massviews-title' ) ), 'parsemag' => true ) ); ?>
          </a>
        </div>
        <?php $currentApp = "massviews"; ?>
        <?php include "../../_footer.php"; ?>
      </main>
    </div>
  </body>
</html>