import { ArrowBackOutlined } from '@mui/icons-material';
import './watch.scss';

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        src="https://player.vimeo.com/progressive_redirect/playback/668973403/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=3492305cd4925b81f13c7e45db434f1633d83841b6e169e4cbdf3def241dd946"
        className="video"
        autoPlay
        progress
        controls
      />
    </div>
  );
}
