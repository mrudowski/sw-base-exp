import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

import {getCharacterRoute, getIdFromUrl} from '../../router/utils.ts';
import {SW_API_URLS} from '../../services/swApi/constants.ts';
import {useListQuery} from '../../services/swApi/hooks/useListQuery.ts';

const Characters = () => {
  const {t} = useTranslation();

  const {data: characters} = useListQuery(SW_API_URLS.characters);

  console.log('%c [mr] Characters', 'background-color:pink; color: black', characters);

  // thanks to react router loader it won't happen
  if (!characters) {
    return t('utils.loading');
  }

  return (
    <article>
      <h2>
        {t('domain.characters')} <small>({characters.length})</small>
      </h2>
      <div>
        {characters.map(character => {
          const id = getIdFromUrl(character.url);
          return (
            <Link key={id} to={getCharacterRoute(id)}>
              {character.name}
            </Link>
          );
        })}
      </div>
    </article>
  );
};

export default Characters;
