import { useContext, useMemo } from "react"
import { List, Paper } from "@mui/material"
import { EntryCard } from "./EntryCard"
import { EntryStatus } from "../../interfaces"
import { EntriesContext } from "../../context/entries"

interface Props {
  status: EntryStatus
}

export const EntryList: React.FC<Props> = ({ status }) => {

  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status)
    , [entries]
  );


  return (
    <div>
      <Paper sx={{ height: 'calc(100vh - 180px)', backgroundColor: 'transparent', padding: '2px 5px' }}>
        <List sx={{ opacity: 1 }}>
          {
            entriesByStatus.map(entry => (
              <EntryCard key={entry._id} entry={entry} />
            ))
          }
        </List>
      </Paper>
    </div>
  )
}
