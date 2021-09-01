import React, { useState } from "react";
import {
  List,
  ListItemText,
  ListItem,
  Collapse,
  Checkbox,
  Typography,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import useStyles from "./styles";

const FilterColumn = () => {
  const filterOptions = [
    {
      name: "Indoor Lights",
      options: ["Low/Artifical", "Partial/indirect", "Direct Sunlight"],
    },
    {
      name: "Plant Size",
      options: ["Extra Small", "Small", "Medium", "Large", "Extra Large"],
    },
    {
      name: "Difficulty",
      options: ["Easy", "Moderate", "Hard"],
    },
    {
      name: "Price",
      options: [
        "Under $10",
        "$10 - $50",
        "$50 - $100",
        "$100 - $200",
        "$200 and Above",
      ],
    },
  ];
  const classes = useStyles();
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([
    "Extra Small",
    "Under $10",
  ]);

  const handleClick = (index) => {
    let indexes = [];
    if (selectedIndexes.includes(index)) {
      indexes = selectedIndexes.filter((i) => i !== index);
    } else {
      indexes = [...selectedIndexes, index];
    }
    setSelectedIndexes(indexes);
  };

  const handleChange = (option) => {
    let options = [];
    if (selectedOptions.includes(option)) {
      options = selectedOptions.filter((i) => i !== option);
    } else {
      options = [...selectedOptions, option];
    }
    setSelectedOptions(options);
  };

  return (
    <div className={classes.filterRoot}>
      <List>
        {filterOptions.map((filterOption, index) => {
          return (
            <List key={index} className={classes.filterOptionContainer}>
              <ListItem button onClick={() => handleClick(index)}>
                <ListItemText
                  primary={
                    <Typography className={classes.filterOptionText}>
                      {filterOption.name}
                    </Typography>
                  }
                />
                {selectedIndexes.includes(index) ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )}
              </ListItem>
              <Collapse
                in={selectedIndexes.includes(index)}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {filterOption.options.map((sub) => {
                    return (
                      <ListItem button>
                        <Checkbox
                          checked={selectedOptions.includes(sub)}
                          onChange={() => handleChange(sub)}
                          name={sub}
                          color="secondary"
                        />
                        <Typography>{sub}</Typography>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </List>
          );
        })}
      </List>
    </div>
  );
};

export default FilterColumn;
