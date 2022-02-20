import * as style from "./style";
type Props = {
  src: string;
  name: string;
  repo: Number;
  followers: Number;
  bio: string;
};
function Card({ src, name, repo, followers, bio }: Props) {
  return (
    <style.Container>
      <style.Picture src={src} />
      <style.Name>{name}</style.Name>
      <style.Infos>
        <style.Content>
          <h1>repositórios</h1>
          <h2>{repo}</h2>
        </style.Content>
        <style.Content>
          <h1>seguidores</h1>
          <h2>{followers}</h2>
        </style.Content>
      </style.Infos>
      <style.Info>Add In Pack</style.Info>
      <style.MoreSkills>More skills </style.MoreSkills>
    </style.Container>
  );
}
export default Card;
