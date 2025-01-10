import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './styles.css';

export default function CoinToggleButton({ selectMetric, handleMetricChange }) {
  return (
    <div className="selectMetric-container">
      <ToggleButtonGroup
        color="primary"
        value={selectMetric}
        exclusive
        onChange={handleMetricChange}
        aria-label="Metric Selector"
        sx={{
          '&.Mui-selected': {
            color: 'var(--orange) !important',
          },
          borderColor: 'var(--orange)',
          border: 'unset !important',
          '& .MuiToggleButtonGroup-grouped': {
            border: '1px solid var(--orange)!important',
            borderColor: 'unset',
            color: 'var(--orange) !important',
          },
          '& .MuiToggleButton-standard': {
            color: 'var(--orange) !important',
          },
        }}
      >
        <ToggleButton value="prices" className="toggle-btn">
          Price
        </ToggleButton>
        <ToggleButton value="marketCaps" className="toggle-btn">
          Mkt. Cap
        </ToggleButton>
        <ToggleButton value="totalVolumes" className="toggle-btn">
          Volume
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
