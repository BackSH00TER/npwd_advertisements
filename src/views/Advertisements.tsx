import { Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { advertisementsAtom } from '../atoms/advertisements';
import { userAtom } from '../atoms/user';
import PresentationCard from '../components/PresentationCard';

const Advertisements = () => {
  const advertisements = useRecoilValue(advertisementsAtom);
  const user = useRecoilValue(userAtom);
  const [search, setSearch] = useState('');

  const filteredAdvertisement = advertisements.filter((advertisement) =>
    advertisement.title?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <Stack spacing={1.5}>
        <TextField
          fullWidth
          placeholder="Search .."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        {filteredAdvertisement.map((advertisement) => (
          <div key={advertisement.id}>
            <PresentationCard advertisement={advertisement} />
          </div>
        ))}
      </Stack>
    </div>
  );
};

export default Advertisements;
