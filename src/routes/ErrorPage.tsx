import {useTranslation} from 'react-i18next';
import {useRouteError} from 'react-router-dom';

export default function ErrorPage() {
  const {t} = useTranslation();
  const error = useRouteError() as {statusText?: string; message?: string; status?: number} | undefined;

  return (
    <article>
      <h2>{t('errorPage.sorry')}</h2>
      <p>{t('errorPage.somethingGoesWrong')}</p>
      <p>
        {error?.statusText} {error?.statusText || error?.message}
      </p>
    </article>
  );
}
